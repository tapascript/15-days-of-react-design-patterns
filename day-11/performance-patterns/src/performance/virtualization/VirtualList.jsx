import { FixedSizeList as List } from "react-window";
import { Item } from "./Item";

export default function VirtualList({
    users,
    height = 600,
    itemHeight = 80,
    width = "100%",
}) {
    return (
        <List
            height={height}
            itemCount={users.length}
            itemSize={itemHeight}
            width={width}
            itemData={users} // this is passed to each row via data prop
            overscanCount={5} // render a few extra items above/below to reduce pop-in
        >
            {({ index, style, data }) => (
                <Item index={index} style={style} data={data} />
            )}
        </List>
    );
}
