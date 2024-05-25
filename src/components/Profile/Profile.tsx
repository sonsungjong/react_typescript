export default function Profile(props : {name:string, age:string}) : JSX.Element
{
    return(
        <div>{props.name} 입니다.</div>
    )
}

