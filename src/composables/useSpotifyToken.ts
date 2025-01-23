import { ref } from 'vue'
import Cookies from 'js-cookie'
import axios from 'axios'

export const useSpotifyToken = () => {
  const getToken = async () => {
    const token = ref(Cookies.get('spotify_token') || null)
    if (token.value) return token

    try {
      const authToken = await axios.post(
        'https://accounts.spotify.com/api/token',
        {
          grant_type: 'client_credentials',
          client_id: import.meta.env.VITE_SPOTIFY_CLIENT_ID,
          client_secret: import.meta.env.VITE_SPOTIFY_CLIENT_SECRET,
        },
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      )

      Cookies.set('spotify_token', authToken.data.access_token, { expires: 1 / 24 })
      token.value = authToken.data.access_token
    } catch (error) {
      console.log(error)
    }

    return token
  }

  return { getToken }
}
