import Image from "next/image"

export default function Expcard(){
    return (
        <div className="flex h-min p-24 pt-60 pl-36 justify-center font-serif">
            <div className="flex flex-col">
                <h1 className="text-5xl">
                    Front-end development .
                </h1>
                <p className="text-2xl font-thin pt-14 font-sans leading-normal">
                        crafting websites that are not only visually striking <br />
                    but also uniquely tailored to each project. With meticulous attention <br /> 
                    to details, I ensure that every aspect of the user experience <br />
                    is thoughtfully designed and flawlessly executed. <br />
                </p>
                <p className="text-xl pt-8 italic">
                    See more ..
                </p>
            </div>
            <Image
                    src="/number1.svg"
                    alt="image absolute failed to load"
                    className="p-24 pt-10 pl-10"
                    width={600}
                    height={600}>
            </Image>
        </div>
    )
}