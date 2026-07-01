import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const About = () => {
    return (
        <>
            <Header />
            <div style={{ minHeight: '60vh', padding: '60px 20px', background: '#f9fafb', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ maxWidth: '800px', width: '100%', background: '#fff', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                    <h1 style={{ textAlign: 'center', color: '#0066cc', marginBottom: '30px', fontSize: '32px', fontWeight: '800' }}>
                        Về ThanhKhuong
                    </h1>
                    <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#374151', marginBottom: '20px' }}>
                        Chào mừng bạn đến với <strong>ThanhKhuong</strong> - nền tảng thương mại điện tử chuyên cung cấp các sản phẩm đồ gia dụng, thiết bị điện máy chính hãng và chất lượng hàng đầu.
                    </p>
                    <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#374151', marginBottom: '20px' }}>
                        Với sứ mệnh mang lại cuộc sống tiện nghi và hiện đại cho mọi gia đình Việt, chúng tôi luôn tuyển chọn khắt khe các sản phẩm từ những thương hiệu uy tín nhất thế giới như LG, Samsung, Sony, Panasonic, và nhiều hơn thế nữa.
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '40px' }}>
                        <div style={{ padding: '20px', background: '#f0f8ff', borderRadius: '8px', borderLeft: '4px solid #0066cc' }}>
                            <h3 style={{ margin: '0 0 10px 0', color: '#0066cc' }}>Chất lượng</h3>
                            <p style={{ margin: '0', fontSize: '14px', color: '#4b5563' }}>Cam kết 100% hàng chính hãng, bảo hành toàn quốc.</p>
                        </div>
                        <div style={{ padding: '20px', background: '#f0f8ff', borderRadius: '8px', borderLeft: '4px solid #0066cc' }}>
                            <h3 style={{ margin: '0 0 10px 0', color: '#0066cc' }}>Dịch vụ</h3>
                            <p style={{ margin: '0', fontSize: '14px', color: '#4b5563' }}>Giao hàng siêu tốc, hỗ trợ lắp đặt tận nhà chuyên nghiệp.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default About;
