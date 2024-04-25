
interface SlidingTextProps{
    texts: string[];
    sentence: string
}

const SlidingText = ({ texts, sentence } : SlidingTextProps) =>{
    return(
        <div className="font-extrabold text-3xl md:text-4xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-white to-50% to-gray-400">
            {`${sentence} `}
            <span className="text-indigo-500 inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
                <ul className={`block animate-text-slide-${texts.length-1} text-left leading-tight [&_li]:block`}>
                    {
                        texts.map((text, index) => (
                            index == text.length - 1 ? <li key={index}>{text}</li> : <li key={index} aria-hidden="true">{text}</li>
                        ))
                    }
                </ul>
            </span>
        </div>
    )
}

export default SlidingText;