const Container = ({children}) => {
    return (
        <div style={{marginLeft:40, padding:22, width: 200,borderRadius: 20 ,border:"1px solid gray", backgroundColor: "lightgray", boxShadow: "2px 2px 2px 1px gray"}}>
            {children}
        </div>
    );
};

export default Container;