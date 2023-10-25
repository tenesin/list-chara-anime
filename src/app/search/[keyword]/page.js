import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header"

const Page = async ({params}) => {

  const { keyword } = params
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  
    const data = await response.json(); // Parse the response body as JSON
  
    // Use the 'data' variable to work with the API response
    console.log(data);
  } catch (error) {
    // Handle any errors that occur during the fetch
    console.error('Error:', error);
  }
  
  const searchAnime = await response.json()

  return (
    <>
    <section>
      <Header title={'Pencarian untuk ${keyword}...'}/>
      <AnimeList api={searchAnime}/>
      </section>
    </>
  )
}

export default Page