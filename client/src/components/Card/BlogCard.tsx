import { TblogCard } from "../../types/Blog";
import Image from "next/image";
import { Button } from "../ui/button";

const BlogCard: React.FC<TblogCard>=({imageUrl, title, description})=>{
    return (
        <div className="space-y-4">
            <Image src={imageUrl} alt={`${title}}`} width={400} height={400}/>
            <span>{title}</span>
            <span>{description}</span>
            <Button variant={'outline'} className="hover:bg-red-500">Learn More</Button>
        </div>
    )
}

export default BlogCard;