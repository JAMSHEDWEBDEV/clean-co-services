import Container from "../components/Ui/Container";

const Home = () => {
    return (
        <Container>
            <div className="flex gap-5 flex-col-reverse md:flex-col lg:flex-row">
                <div className="flex-[1]">
                    <h1 className="text-4xl lg:text-7xl font-bold mb-7">Quality Cleaning <br></br> <span className="text-primary">for Your Home</span> </h1>
                    <p className="my-12">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus fuga eius reiciendis quo accusamus qui ab reprehenderit nesciunt, voluptate consequatur dignissimos sit repellat. Repellendus explicabo earum quidem inventore nisi perspiciatis.</p>
                    <div className="mb-8">
                        <button className="btn btn-primary font-bold">Book a Service</button>
                        <button className="btn btn-outline ml-8 font-bold">Read more</button>
                    </div>
                    <div className="divider"></div>
                    <div className="flex items-center gap-7 my-10">
                        <div className="avatar-group -space-x-6">
                            <div className="avatar">
                                <div className="w-12">
                                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1528&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-12">
                                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1528&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-12">
                                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1528&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-12">
                                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1528&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                                </div>
                            </div>
                        </div>
                        <p> Rated 5 Out Of 5 by our clients</p>
                    </div>
                </div>
                <div className="flex-[1] h-[500px] rounded-lg overflow-hidden">
                    <img src="https://media.istockphoto.com/id/869290346/photo/brainstorming-for-the-best-possible-diagnosis.jpg?s=2048x2048&w=is&k=20&c=VtBLJl7py0-KAR9h-B-MaJQcDiMzL8mrIB903OPKYIQ=" alt="" className="w-full h-full object-cover" />
                </div>
            </div>
        </Container>
    );
};

export default Home;