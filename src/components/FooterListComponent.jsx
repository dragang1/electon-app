function FooterListComponent({ title, items }) {
    return (
        <div className='flex flex-col gap-[10px] p-[5px]'>
            <h3 className='text-2xl text-mainBlue font-bold'>{title}</h3>
            {items.map((el, index) => {
                return (
                    <ul key={index}>
                        <li className='text-[14px] lg:text-[18px] text-mainBlue'>{el}</li>
                    </ul>
                );
            })}
        </div>
    );
}

export default FooterListComponent;