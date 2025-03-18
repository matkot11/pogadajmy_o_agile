import { type Ref, ref } from 'vue'
import axios from 'axios'
import { useSpotifyToken } from '@/composables/useSpotifyToken.ts'
import type { Episode } from '@/typings/spotify.ts'

type UseSpotifyDataReturn = {
  getSpotifyData: () => Promise<void>
  spotifyData: Ref<Episode[] | null>
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
      const { data } = await axios.get(
        'https://api.spotify.com/v1/shows/0yYMHIsmd6I5dGXU3xyIcL/episodes?limit=10&offset=0',
        {
          headers: {
            Authorization: `Bearer ${token.value}`,
          },
        },
      )

      const filteredEpisodes = data.items.filter((item: Episode) => !!item)
      spotifyData.value = filteredEpisodes.slice(0, 3)
    } catch (e) {
      console.log(e)
    } finally {
      loading.value = false
    }
  }

  return { getSpotifyData, spotifyData, loading }
}
