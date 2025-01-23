import { type Ref, ref } from 'vue'
import axios from 'axios'
import { useSpotifyToken } from '@/composables/useSpotifyToken.ts'
import type { Show } from '@/typings/spotify.ts'

type UseSpotifyDataReturn = {
  getSpotifyData: () => Promise<void>
  spotifyData: Ref<Show | null>
  loading: Ref<boolean>
}

export const useSpotifyData = (): UseSpotifyDataReturn => {
  const { getToken } = useSpotifyToken()

  const loading = ref(false)
  const spotifyData = ref(null)

  const getSpotifyData = async () => {
    loading.value = true

    const token = await getToken()

    try {
      const { data } = await axios.get('https://api.spotify.com/v1/shows/0yYMHIsmd6I5dGXU3xyIcL', {
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      })

      spotifyData.value = data
    } catch (e) {
      console.log(e)
    } finally {
      loading.value = false
    }
  }

  return { getSpotifyData, spotifyData, loading }
}
