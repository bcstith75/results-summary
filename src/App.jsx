import reactionImg from './assets/images/icon-reaction.svg';
import memoryImg from './assets/images/icon-memory.svg';
import verbalImg from './assets/images/icon-verbal.svg';
import visualImg from './assets/images/icon-visual.svg';

import data from './data.json';

function App() {

  console.log(data)

  return (
    <div className="md:max-w-2xl mx-auto font-hanken md:mt-32 shadow-lg px-8 md:px-0
     container bg-white rounded-2xl">
      <div className="flex flex-col md:flex-row">

        <div className="bg-gradient-to-b md:w-1/2 py-4  from-lightSlateBlue  to-lightRoyalBlue items-center
        rounded-2xl md:p-10 flex flex-col text-center space-y-6">
            <h1 className="capitalize text-gray-300 font-semibold text-2xl">Your result</h1>

            <div className="rounded-full text-center mt-4 bg-gradient-to-b space-y-4 from-violetBlue py-10 px-12">
              <div className="">
                <h2 className="text-5xl font-bold text-white ">76</h2>
                <p className="text-gray-400">of 100</p>
              </div>
            </div>

            <div className="w-72 md:w-52">
              <h2 className="capitalize text-white font-semibold text-2xl mt-4">Great</h2>
              <div className=" mt-2 text-gray-400">You scored higher than 65% of the people who have taken this test.</div>
            </div>
        </div>

        <div className="md:w-1/2 md:px-10 pt-10 mt-0 space-y-4">
          <h1 className="capitalize text-black font-bold text-2xl ">Summary</h1>


          {
            data.map((item, index) => {
              return (
                <div className={`${item.background} p-2 items-center rounded-lg flex flex-row justify-between`}>
                  <div className="flex flex-row items-center">
                    <img src={item.icon} alt="" className='h-9 w-9 pr-3'/>
                    <div className="{`font-semibold ${text-color} text-lg`}">{item.category}</div>
                  </div>

                  <div className="font-semibold text-black text-lg">
                    <span>{item.score} </span>
                    <span className="text-gray-500"> / 100 </span>
                  </div>
                </div>
              )
            })
          }


          <div className="flex flex-col items-center justify-center py-6">
            <button className="rounded-full w-32 md:w-full bg-darkGrayBlue text-white p-3 text-center">Continue</button>
          </div>


        </div>

      </div>
    </div>
  )
}

export default App
