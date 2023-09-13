import profile from '../../assets/images/profile.png';

const Header = () => {
    return (
        <div className='container mx-auto flex justify-between my-5 items-center border-b-2 pb-4'>
            <h1 className='text-5xl font-bold'>Team Avenger</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;