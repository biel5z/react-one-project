
type Props = {
    nome: string;
    avatar: string;
    roles: string[];
    address?: string;
}

export const Person = ({ nome, avatar, roles }: Props) => {

    return (
        <div className="p-4">
            <h1>{nome}</h1>
            <img src={avatar}
                alt={nome}
                className="w-40"
            />
            <ul>
                <li>{roles[0]}</li>
                <li>{roles[1]}</li>
            </ul>

        </div>
    );
}