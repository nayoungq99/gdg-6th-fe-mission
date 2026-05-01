import React from 'react';

function Footer(){
    return (
        <div style={styles.footer}>
            <button style={styles.button}>장바구니 구매하기</button>
        </div>
    );
}

const styles ={
    footer:{
        justifyContent:"center",
    },
    button:{
        width:"90%",
    },
}

export default Footer;