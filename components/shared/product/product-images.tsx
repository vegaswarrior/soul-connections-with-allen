'use client'
import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";


const ProductImages = ({ images }: {images: string[]}) => {
    const [current, setCurrent] = useState(0);

    return (
       <div className="space-y-4">
          <Image src={images[current]} alt="product image" width={400} height={400} className="min-h-[300px] object-cover object-center p-3" />
          <div className="flex">
            {images.map((image, index) => (
                <div key={image} onClick={() => setCurrent(index)} className={cn('border mr-2 cursor-pointer hover:border-blue-600', current === index && 'border-blue-200')}>
                 <Image src={image} alt="image" width={100} height={100}/>
                </div>
            ))}
          </div>
       </div>
    );
}

export default ProductImages;