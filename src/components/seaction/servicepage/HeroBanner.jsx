import Button1 from "../../button/propBtn/Button1";
let HerobannerServiePage = () => {
  return (
    <>
      <section className="bg-[url('https://easyfound.automatex.dev/media/uploads/category_c52b9626-6fc9-4443-a747-d8be5eaaa024.png')]  bg-center bg-cover bg-no-repeat font-poppins">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center bg-white dark:bg-black bg-opacity-50 dark:bg-opacity-40">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-black dark:text-white text-3xl font-extrabold sm:text-5xl">
              Explore Numerous
              <strong className="font-extrabold text-amber-500 sm:block">
                {" "}
                Local Services{" "}
              </strong>
            </h1>

            <p className="mt-4 text-black dark:text-white  font-bold sm:text-xl/relaxed">
              Discover a wide range of services tailored to meet your needs,
              from local favorites to unique offerings, all designed to make
              your life easier in Cambodia.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button1 title="Get Started" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default HerobannerServiePage;
