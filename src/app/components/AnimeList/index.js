import Image from "next/image"
import Link from "next/link"

const AnimeList = ({api}) => {
    return (
        <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
            {api && api.data && api.data.map((data) => {
            return (
                <Link  href={`/${data.mal_id}`} className="cursor-pointer hover:text-teal-700">
                    <Image 
                    src={data.images.webp.image_url} 
                    alt="..." 
                    width={300} 
                    height={350} 
                    className="w-full max-h-64 object-cover"
                    />
                <h3 className="font-bold md:text-xl text-md p-4 text-center">{data.name}</h3>
                </Link>
            )
        })}
        </div>
    )
}

export default AnimeList