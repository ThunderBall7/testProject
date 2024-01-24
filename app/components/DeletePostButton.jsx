'use client'
import { useRouter } from "next/navigation"

export default function DeletePostButton({postId}){
    const router = useRouter()

    async function handleClick(){

        try {
            await fetch(`/api/post/${postId}`, {
                method: 'DELETE'
            })
            router.refresh()
        } catch(e){
            console.error(e)
        }

    }

    return (
        <button
        onClick={handleClick}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"

        >Delete Post</button>
    )
}
