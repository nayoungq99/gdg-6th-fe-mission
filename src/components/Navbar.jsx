import React from 'react';

function Navbar(){
    return (
        <div style={styles.navbar}>
            <img src="/gdg-logo.svg" style={styles.logo} />
            <div style={styles.buttonGroup}>
                <button>카테고리 필터링 </button>
                <button>가격 범위 필터링 </button>
                <button>상품 정렬 </button>
            </div>

            <button>관리자</button>
        </div>
    );
}

export default Navbar;
const styles ={
    navbar: {
        textAlign: "center",
        marginTop: "30px",
    },
    logo: {
        width: "70px",
        marginBottom: "10px",
    },
    buttonGroup: {
        justifyContent: "center",
        marginBottom: "5px",
    },
};