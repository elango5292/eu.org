import Image from 'next/image'

export default function pby(){

    return(
        <div className="flex">
 
  <Image
  className="p-2 m-1"
      src="/freebsd.png"
      width={150}
      height={60}
      alt="freebsd"
    />
    <Image
    className="p-2  m-1"
      src="/django.png"
      width={100}
      height={45}
      alt="django"
    />
    <Image
    className="p-2  m-1 "
      src="/apache.png"
      width={150}
      height={60}
      alt="apache"
    />
    <Image
    className="p-2  m-1"
      src="/python.png"
      width={150}
      height={60}
      alt="python"
    />

</div>

    )
}

