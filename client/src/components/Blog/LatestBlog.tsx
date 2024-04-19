import { BlogData } from "../../lib/utils/constant";

const LatestBlog = () => {
    return (
        <>
            {BlogData.map((item,index)=>{
                <div key={index}>
                    
                </div>
            })}
        </>
    )
}

export default LatestBlog;