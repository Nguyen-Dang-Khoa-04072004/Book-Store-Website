

export default function SubcribeSection(){
    return (
        <div className="flex flex-col gap-[30px] p-[30px] w-[500px]">
            <h1 className="text-[20px] font-[700]" >Don't miss the newest books</h1>
            <p>Donec ac vehicula turpis. Aenean sagittis est eu arcu ornare, eget venenatis purus lobortis. Aliquam erat volutpat. Aliquam magna odio.</p>
            <div className="flex gap-[10px]">
                <input type="text" className="flex-1 bg-[#F3F3F3] text-[15px] p-[20px] rounded-sm" placeholder="Type your email here"/>
                <button className="bg-[#8D27AE] pt-[10px] pb-[10px] pl-[15px] pr-[15px] rounded-lg text-white font-[500]">Subcribe</button>
            </div>
        </div>
    )
}