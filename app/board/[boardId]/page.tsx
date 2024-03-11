import { Room } from "@/components/room"
import { Canvas } from "./_components/canvas";
import { Info } from "./_components/info";
import { Toolbar } from "./_components/toolbar";
import { Loading } from "./_components/loading";
interface BoardIdPageProps {
    params: {
        boardId: string;
    };
};

const BoardIdPage = ({
    params,
}: BoardIdPageProps) => {
    return (
        <Room roomId={params.boardId} fallback={<Loading />}>
            <Canvas boardId={params.boardId} />
        </Room>
    );
};

export default BoardIdPage;