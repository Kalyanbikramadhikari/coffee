import React from 'react'

const Home = () => {
    return (
        <div className='p-16 '>

            <div className="flex">
                <img src="/images/coffeecup.png" alt="" className='h-[420px] b absolute right-48 top-20' />

                <div className="">

                    <img src="/images/coffeesplash.png" alt="" className='h-96 absolute bottom-60 right-11 ' />
                </div>

                {/* below are coffe beans */}
                <div className="">
                    <img src="/images/coffeethree.png" alt="" className='h-12 absolute top-32 right-56' />
                </div>
                <div className="">
                    <img src="/images/coffeefive.png" alt="" className='h-12 absolute top-[300px] right-[500px]' />
                </div>
                <div className="">
                    <img src="/images/coffeethree.png" alt="" className='h-12 absolute top-[600px] right-[600px] ' />
                </div>
                <div className="">
                    <img src="/images/coffeefour.png" alt="" className='h-12 absolute bottom-44 right-[400px]' />
                </div>
                <div className="">
                    <img src="/images/coffeethree.png" alt="" className='h-12 absolute bottom-44 right-[200px] transform rotate-90' />
                </div>
                {/* <div className="">
    <img src="/images/" alt="" />
</div> */}
            </div>








        </div>
    )
}

export default Home