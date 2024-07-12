export default function Card() {
  return (
    <div className="flex flex-col items-center px-4 justify-center w-[200px] h-[350px] border-2 bg-primary border-orange-500 rounded-md font-poppins">
      <img
        src="./avatar.png"
        className="size-20 rounded-full border-2 border-orange-500 bg-[#ff9912] my-2"
      />
      <div className="text-[20px]">Name</div>
      <div className="text-[16px] text-orange-500">Title</div>
      <div className="line-clamp-6">
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit saepe
        facere iusto quam, ipsum odio nisi obcaecati quidem temporibus dicta
        soluta, ad impedit quisquam molestiae? Veniam officia iste ut iure."
      </div>
      <div className="bg-orange-500 rounded-md px-4 py-1 my-2">Review</div>
    </div>
  );
}
