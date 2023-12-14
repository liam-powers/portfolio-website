import Image from "next/image";

const languages = [
  'Python',
  'C Sharp',
  'Java',
  'C',
  'TypeScript',
  'JavaScript',
  'React',
  'HTML',
  'CSS',
];

const technologies = [
  'Pandas',
  'NumPy',
  'Seaborn',
  'Matplotlib',
  'Git',
  'GitHub',
  'VSCode',
  'Firebase',
  'Next.js',
];

function createTechDisplay(arr: string[]) {
  return (
    <div className="flex flex-col gap-6">
      {arr.map((el) => (
        <div key={el} className="flex flex-row items-center gap-4">
          <Image src={"/codeicons/" + el.toLowerCase() + ".png"} alt="Skill icon" width={0} height={0} sizes="100vw" className="w-16 h-auto"/>
          <span>{el}</span>
        </div>
      ))}
    </div>
  )
};

export default function LangsAndTechs() {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-20 md:gap-60 whitespace-nowrap items-center bg-mocha/[.85] px-[2rem] py-10 md:px-8 md:py-8 rounded-2xl">
        <div>
          <div className="text-4xl font-bold pb-10 underline underline-offset-auto"> Languages </div>
          <div>{ createTechDisplay(languages) }</div>
        </div>
        <div>
          <div className="text-4xl font-bold pb-10 underline underline-offset-auto flex justify-center"> Technologies </div>
          <div>{ createTechDisplay(technologies) }</div>
        </div>
      </div>
    </>
  )
}