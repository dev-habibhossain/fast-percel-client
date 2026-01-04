import logo from '../../../assets/logo.png';

const FastPercelLogo = () => {
    return (
        <div className='flex items-end'>
            <img className='mb-2' src={logo} alt="FastPercel Logo" />
            <p className="-ml-3 text-2xl font-extrabold">FastPercel</p>
        </div>
    );
};

export default FastPercelLogo;