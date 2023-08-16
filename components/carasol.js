import Image from 'next/image'

export default function pby(){

    return(
        <div className="flex flex-wrap justify-center items-center w-full">
      <div className="p-2 m-1 w-1/2 sm:w-1/4 md:w-1/6">
        <Image
          src="/freebsd.png"
          width={150}
          height={60}
          alt="freebsd"
        />
      </div>
      <div className="p-2 m-1 w-1/2 sm:w-1/4 md:w-1/6">
        <Image
          src="/django.png"
          width={150}
          height={60}
          alt="django"
        />
      </div>
      <div className="p-2 m-1 w-1/2 sm:w-1/4 md:w-1/6">
        <Image
          src="/apache.png"
          width={150}
          height={60}
          alt="apache"
        />
      </div>
      <div className="p-2 m-1 w-1/2 sm:w-1/4 md:w-1/6">
        <Image
          src="/python.png"
          width={150}
          height={60}
          alt="python"
        />
      </div>
    </div>

    )
}

