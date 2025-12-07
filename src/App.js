import React, { useState } from 'react';
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box,
  AppBar,
  Toolbar,
  IconButton,
  ToggleButton,
  ToggleButtonGroup,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import ImageIcon from '@mui/icons-material/Image';
import './App.css';

// Create theme with Thai font support
const theme = createTheme({
  typography: {
    fontFamily: "'Sarabun', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
    h4: {
      letterSpacing: 'normal',
    },
    h6: {
      letterSpacing: 'normal',
    },
    body1: {
      letterSpacing: 'normal',
    },
    body2: {
      letterSpacing: 'normal',
    },
  },
});

// Get public URL for GitHub Pages compatibility
const PUBLIC_URL = process.env.PUBLIC_URL || '';

// Product data - 16 products from Pipe3D.csv
// Data extracted from public/file/Pipe3D.csv
const products = [
  {
    id: 1,
    name: 'หน้าจานกลม',
    image: `${PUBLIC_URL}/images/PC-A-EIT.png`,
    description: 'ข้อต่อหน้าจานกลม สำหรับเป็นฐานยึดติดพื้น ผนัง หรือเพดาน ช่วยรองรับโครงสร้าง DIY ให้มั่นคงและแข็งแรง',
    sketchfabEmbed: 'https://sketchfab.com/models/312b4e467b264ef19cc9214fbe576c23/embed',
    sketchfabTitle: 'PC-A-EIT',
    sketchfabAuthor: 'kimkim184762',
    sketchfabModelId: '312b4e467b264ef19cc9214fbe576c23',
  },
  {
    id: 2,
    name: 'ข้องอ 90 องศา',
    image: `${PUBLIC_URL}/images/PC-B-EIT.png`,
    description: 'ข้อต่อสำหรับเปลี่ยนทิศทางท่อแบบมุมฉาก 90° ใช้สร้างมุมโครงสร้าง',
    sketchfabEmbed: 'https://sketchfab.com/models/c2ead7a4cc824c3283a89428c92b299c/embed',
    sketchfabTitle: 'PC-B-EIT',
    sketchfabAuthor: 'kimkim184762',
    sketchfabModelId: 'c2ead7a4cc824c3283a89428c92b299c',
  },
  {
    id: 3,
    name: 'สามทางฉาก',
    image: `${PUBLIC_URL}/images/PC-C-L-EIT.png`,
    description: 'ข้อต่อสามทางแบบมุมฉาก เชื่อมต่อท่อในแนวตั้ง–แนวนอน เหมาะกับการทำชั้นวาง โต๊ะ หรือโครงสร้างรูปทรงตัว L',
    sketchfabEmbed: 'https://sketchfab.com/models/b65d7f7b71c94710a84ab5820b657307/embed',
    sketchfabTitle: 'PC-C-L-EIT',
    sketchfabAuthor: 'kimkim184762',
    sketchfabModelId: 'b65d7f7b71c94710a84ab5820b657307',
  },
  {
    id: 4,
    name: 'สามทางตัวที',
    image: `${PUBLIC_URL}/images/PC-C-T-EIT.png`,
    description: 'ข้อต่อรูปตัว T สำหรับแตกแขนท่อสามทิศทาง เหมาะสำหรับเพิ่มจุดยึด หรือสร้างโครงแบบแนวขวางและแนวตั้ง',
    sketchfabEmbed: 'https://sketchfab.com/models/8879107e8d9a4d5bb1d0aa4ec634fdc7/embed',
    sketchfabTitle: 'PC-C-T-EIT',
    sketchfabAuthor: 'kimkim184762',
    sketchfabModelId: '8879107e8d9a4d5bb1d0aa4ec634fdc7',
  },
  {
    id: 5,
    name: 'สามทางเอียง 45 องศา',
    image: `${PUBLIC_URL}/images/PC-C-V-EIT.png`,
    description: 'ข้อต่อสามทางมุมเอียง 45° ช่วยให้โครงสร้างสร้างมุมเฉียงได้อย่างแม่นยำ เหมาะกับโครงงานที่ต้องการเส้นสายแบบไดนามิก',
    sketchfabEmbed: 'https://sketchfab.com/models/41450f7a381c413396c5b59cbd3b8681/embed',
    sketchfabTitle: 'PC-C-V-EIT',
    sketchfabAuthor: 'kimkim184762',
    sketchfabModelId: '41450f7a381c413396c5b59cbd3b8681',
  },
  {
    id: 6,
    name: 'สี่ทางจั่ว',
    image: `${PUBLIC_URL}/images/PC-D-J-EIT.png`,
    description: 'ข้อต่อสี่ทางแบบทรงจั่ว ใช้สร้างจุดยอดโครงสร้าง เช่น หลังคาทรงจั่ว เฟรมทรงสามเหลี่ยม หรือโครงเหล็กดีไซน์เฉียง',
    sketchfabEmbed: 'https://sketchfab.com/models/5c42692664dc43568eabbd523b0a4554/embed',
    sketchfabTitle: 'PC-D-J-EIT',
    sketchfabAuthor: 'kimkim184762',
    sketchfabModelId: '5c42692664dc43568eabbd523b0a4554',
  },
  {
    id: 7,
    name: 'สี่ทางหมุน',
    image: `${PUBLIC_URL}/images/PC-D-R-EIT.png`,
    description: 'ข้อต่อสี่ทางแบบหมุน ปรับมุมได้อิสระ เหมาะสำหรับงานโครงสร้างที่ต้องการความยืดหยุ่นและปรับองศาได้ตามต้องการ',
    sketchfabEmbed: 'https://sketchfab.com/models/8a5d627f085248babfa5b6fca22782f5/embed',
    sketchfabTitle: 'PC-D-R-EIT',
    sketchfabAuthor: 'kimkim184762',
    sketchfabModelId: '8a5d627f085248babfa5b6fca22782f5',
  },
  {
    id: 8,
    name: 'ห้าทางฉาก',
    image: `${PUBLIC_URL}/images/PC-E-L-EIT.png`,
    description: 'ข้อต่อห้าทิศทางแบบมุมฉาก เหมาะสำหรับการต่อโครงสร้างหลายแขน เช่น โครงชั้นวางหรือเฟรมทรงกล่องที่ต้องการจุดรวมหลายด้าน',
    sketchfabEmbed: 'https://sketchfab.com/models/c115fc61f1584bbb8dbd413a841675c6/embed',
    sketchfabTitle: 'PC-E-L-EIT',
    sketchfabAuthor: 'kimkim184762',
    sketchfabModelId: 'c115fc61f1584bbb8dbd413a841675c6',
  },
  {
    id: 9,
    name: 'ห้าทางประคองจั่ว',
    image: `${PUBLIC_URL}/images/PC-E-SJ-EIT.png`,
    description: 'ข้อต่อห้าทางสำหรับงานโครงสร้างทรงจั่ว เสริมแรงให้เฟรมหลังคาหรือเฟรมทรงสามเหลี่ยมให้มั่นคงยิ่งขึ้น',
    sketchfabEmbed: 'https://sketchfab.com/models/911dd92852d24750992281232e453199/embed',
    sketchfabTitle: 'PC-E-SJ-EIT',
    sketchfabAuthor: 'kimkim184762',
    sketchfabModelId: '911dd92852d24750992281232e453199',
  },
  {
    id: 10,
    name: 'ห้าทางประคองข้าง',
    image: `${PUBLIC_URL}/images/PC-E-SS-EIT.png`,
    description: 'ข้อต่อห้าทางที่ออกแบบมาสำหรับยึดโครงด้านข้าง เพิ่มความแข็งแรงให้โครงสร้างแนวประกบหรือเฟรมที่ต้องรับแรงด้านข้าง',
    sketchfabEmbed: 'https://sketchfab.com/models/3b15a8813b444361b46b4a17bad71639/embed',
    sketchfabTitle: 'PC-E-SS-EIT',
    sketchfabAuthor: 'kimkim184762',
    sketchfabModelId: '3b15a8813b444361b46b4a17bad71639',
  },
  {
    id: 11,
    name: 'ข้อต่อค้ำข้างเดียว',
    image: `${PUBLIC_URL}/images/PC-G-D1-EIT.png`,
    description: 'ข้อต่อสำหรับค้ำยันจากด้านเดียว ช่วยเสริมความแข็งแรงจุดยึดหลัก เหมาะกับงานที่ต้องการบังคับทิศทางแรงเฉียง',
    sketchfabEmbed: 'https://sketchfab.com/models/e2c4528b135c48048cb97bd4d345ff44/embed',
    sketchfabTitle: 'PC-G-D1-EIT',
    sketchfabAuthor: 'kimkim184762',
    sketchfabModelId: 'e2c4528b135c48048cb97bd4d345ff44',
  },
  {
    id: 12,
    name: 'กากบาทสี่ทาง',
    image: `${PUBLIC_URL}/images/PC-G-XD4-EIT.png`,
    description: 'ข้อต่อรูปกากบาทต่อออกสี่ทิศทาง เหมาะสำหรับงานโครงสร้างแบบตารางหรือเฟรมที่ต้องการศูนย์กลางเชื่อมหลายจุด',
    sketchfabEmbed: 'https://sketchfab.com/models/26c9692c31544724b0d2c016f5b1cdf0/embed',
    sketchfabTitle: 'PC-G-XD4-EIT',
    sketchfabAuthor: 'kimkim184762',
    sketchfabModelId: '26c9692c31544724b0d2c016f5b1cdf0',
  },
  {
    id: 13,
    name: 'ต่อตรงยาว',
    image: `${PUBLIC_URL}/images/PC-H-D-EIT.png`,
    description: 'ข้อต่อตรงแบบยาว ใช้เชื่อมท่อสองท่อนในแนวเดียวกัน เหมาะสำหรับขยายความยาวโครงสร้าง',
    sketchfabEmbed: 'https://sketchfab.com/models/572021fddb9240bda2f9fa1a2a6c150a/embed',
    sketchfabTitle: 'PC-H-D-EIT',
    sketchfabAuthor: 'kimkim184762',
    sketchfabModelId: '572021fddb9240bda2f9fa1a2a6c150a',
  },
  {
    id: 14,
    name: 'ข้อต่อตรงสามทาง',
    image: `${PUBLIC_URL}/images/PC-H-D3-EIT.png`,
    description: 'ข้อต่อตรงที่เพิ่มช่องต่อด้านข้าง เหมาะกับการเพิ่มแขนเสริม หรือแตกแนวโครงสร้างจากท่อหลัก',
    sketchfabEmbed: 'https://sketchfab.com/models/3edfa360bef74f128949a240b6bfd7d7/embed',
    sketchfabTitle: 'PC-H-D3-EIT',
    sketchfabAuthor: 'kimkim184762',
    sketchfabModelId: '3edfa360bef74f128949a240b6bfd7d7',
  },
  {
    id: 15,
    name: 'ข้อต่อตรงสี่ทาง',
    image: `${PUBLIC_URL}/images/PC-H-D4-EIT.png`,
    description: 'ข้อต่อตรงแบบสี่ทิศทาง ช่วยให้สามารถต่อท่อตรงพร้อมแตกแขนออกหลายด้านในจุดเดียว',
    sketchfabEmbed: 'https://sketchfab.com/models/b7ea334b1d88415985bde74b51548b13/embed',
    sketchfabTitle: 'PC-H-D4-EIT',
    sketchfabAuthor: 'kimkim184762',
    sketchfabModelId: 'b7ea334b1d88415985bde74b51548b13',
  },
  {
    id: 16,
    name: 'ต่อตรงปิดหัวรู',
    image: `${PUBLIC_URL}/images/PC-H-DEND-EIT.png`,
    description: 'ข้อต่อสำหรับอุดปิดปลายท่อ ใช้ปิดหัวรูเพื่อความเรียบร้อย ป้องกันฝุ่น และทำให้โครงสร้างดูสมบูรณ์',
    sketchfabEmbed: 'https://sketchfab.com/models/eb67d197d4c442f3bc8705d0203340a0/embed',
    sketchfabTitle: 'PC-H-DEND-EIT',
    sketchfabAuthor: 'kimkim184762',
    sketchfabModelId: 'eb67d197d4c442f3bc8705d0203340a0',
  },
];

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [viewMode, setViewMode] = useState('3d'); // '3d' or '2d'

  const currentProduct = products[currentIndex];

  const handleViewModeChange = (event, newMode) => {
    if (newMode !== null) {
      setViewMode(newMode);
    }
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  // Swipe handlers
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    }
    if (isRightSwipe) {
      handlePrevious();
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box 
        sx={{ 
          flexGrow: 1, 
          minHeight: '100vh', 
          backgroundColor: '#f8fafc',
          background: 'linear-gradient(180deg, #f0f7ff 0%, #ffffff 100%)',
        }}
      >
      <AppBar 
        position="static" 
        elevation={0}
        sx={{ 
          backgroundColor: '#ffffff',
          borderBottom: '1px solid #e2e8f0',
          mb: 6,
        }}
      >
        <Toolbar sx={{ py: 2 }}>
            <Typography 
            variant="h6" 
            component="div" 
            sx={{ 
              flexGrow: 1,
              fontWeight: 600,
              color: '#1e40af',
              letterSpacing: 'normal',
            }}
          >
            Pipe3D
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box
              component="a"
              href="https://www.tiktok.com/@toolstik"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                transition: 'opacity 0.2s ease',
                '&:hover': {
                  opacity: 0.7,
                },
              }}
            >
              <Box
                component="img"
                src={`${PUBLIC_URL}/logo/tiktok-shop-marketplace.png`}
                alt="TikTok Shop"
                sx={{
                  height: 32,
                  width: 'auto',
                  objectFit: 'contain',
                }}
              />
            </Box>
            <Box
              component="a"
              href="https://s.shopee.co.th/3qFrUcTI5H"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                transition: 'opacity 0.2s ease',
                '&:hover': {
                  opacity: 0.7,
                },
              }}
            >
              <Box
                component="img"
                src={`${PUBLIC_URL}/logo/shopee.png`}
                alt="Shopee"
                sx={{
                  height: 32,
                  width: 'auto',
                  objectFit: 'contain',
                }}
              />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" sx={{ py: 2, px: 3 }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mb: 4,
            gap: 2,
          }}
        >
          <IconButton
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            sx={{
              backgroundColor: '#ffffff',
              color: '#1e40af',
              border: '1px solid #e2e8f0',
              width: 48,
              height: 48,
              '&:hover': { 
                backgroundColor: '#eff6ff',
                borderColor: '#3b82f6',
              },
              '&.Mui-disabled': { 
                backgroundColor: '#f1f5f9',
                borderColor: '#e2e8f0',
                color: '#cbd5e1',
              },
              transition: 'all 0.2s ease',
            }}
          >
            <ArrowBackIosIcon sx={{ fontSize: 20 }} />
          </IconButton>

          <Box sx={{ flex: 1, textAlign: 'center' }}>
            <Typography 
              variant="body2" 
              sx={{ 
                color: '#64748b',
                fontSize: '0.875rem',
                fontWeight: 500,
                mb: 0.5,
              }}
            >
              Product {currentIndex + 1} of {products.length}
            </Typography>
          </Box>

          <IconButton
            onClick={handleNext}
            disabled={currentIndex === products.length - 1}
            sx={{
              backgroundColor: '#ffffff',
              color: '#1e40af',
              border: '1px solid #e2e8f0',
              width: 48,
              height: 48,
              '&:hover': { 
                backgroundColor: '#eff6ff',
                borderColor: '#3b82f6',
              },
              '&.Mui-disabled': { 
                backgroundColor: '#f1f5f9',
                borderColor: '#e2e8f0',
                color: '#cbd5e1',
              },
              transition: 'all 0.2s ease',
            }}
          >
            <ArrowForwardIosIcon sx={{ fontSize: 20 }} />
          </IconButton>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
          <ToggleButtonGroup
            value={viewMode}
            exclusive
            onChange={handleViewModeChange}
            aria-label="view mode"
            sx={{
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              padding: '4px',
              '& .MuiToggleButton-root': {
                px: 3,
                py: 1.5,
                borderRadius: '8px',
                border: 'none',
                color: '#64748b',
                fontWeight: 500,
                fontSize: '0.875rem',
                textTransform: 'none',
                '&.Mui-selected': {
                  backgroundColor: '#1e40af',
                  color: '#ffffff',
                  '&:hover': {
                    backgroundColor: '#1e3a8a',
                  },
                },
                '&:hover': {
                  backgroundColor: '#eff6ff',
                },
              },
            }}
          >
            <ToggleButton value="3d" aria-label="3d view">
              <ViewInArIcon sx={{ mr: 1, fontSize: 18 }} />
              3D View
            </ToggleButton>
            <ToggleButton value="2d" aria-label="2d view">
              <ImageIcon sx={{ mr: 1, fontSize: 18 }} />
              Image
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>

        <Box
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          sx={{ userSelect: 'none' }}
        >
          <Card
            elevation={0}
            sx={{
              maxWidth: 700,
              mx: 'auto',
              borderRadius: '16px',
              border: '1px solid #e2e8f0',
              backgroundColor: '#ffffff',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              '&:hover': {
                boxShadow: '0 10px 25px rgba(30, 64, 175, 0.08)',
              },
            }}
          >
            {viewMode === '3d' ? (
              <Box
                className="sketchfab-embed-wrapper"
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: 450,
                  backgroundColor: '#0f172a',
                  borderRadius: '16px 16px 0 0',
                }}
              >
                <iframe
                  title="3D Model Viewer"
                  frameBorder="0"
                  allowFullScreen
                  mozAllowFullScreen="true"
                  webkitAllowFullScreen="true"
                  allow="autoplay; fullscreen; xr-spatial-tracking"
                  xr-spatial-tracking="true"
                  execution-while-out-of-viewport="true"
                  execution-while-not-rendered="true"
                  web-share="true"
                  src={currentProduct.sketchfabEmbed}
                  style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                  }}
                />
              </Box>
            ) : (
              <CardMedia
                component="img"
                height="450"
                image={currentProduct.image}
                alt={currentProduct.name}
                sx={{ 
                  objectFit: 'cover',
                  backgroundColor: '#f1f5f9',
                }}
              />
            )}
            <CardContent sx={{ p: 5 }}>
              <Typography
                gutterBottom
                variant="h4"
                component="h2"
                align="center"
                sx={{ 
                  mb: 2,
                  fontWeight: 600,
                  color: '#1e293b',
                  letterSpacing: 'normal',
                  fontSize: { xs: '1.75rem', sm: '2rem' },
                  fontFamily: "'Sarabun', sans-serif",
                  wordBreak: 'break-word',
                }}
              >
                {currentProduct.name}
              </Typography>
              <Typography
                variant="body1"
                align="center"
                sx={{ 
                  color: '#64748b',
                  fontSize: '1rem',
                  lineHeight: 1.8,
                  maxWidth: '500px',
                  mx: 'auto',
                  fontFamily: "'Sarabun', sans-serif",
                  wordBreak: 'break-word',
                }}
              >
                {currentProduct.description}
              </Typography>
            </CardContent>
          </Card>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1.5, mt: 5 }}>
          {products.map((_, index) => (
            <Box
              key={index}
              onClick={() => setCurrentIndex(index)}
              sx={{
                width: index === currentIndex ? 32 : 8,
                height: 8,
                borderRadius: index === currentIndex ? '4px' : '50%',
                backgroundColor: index === currentIndex ? '#1e40af' : '#cbd5e1',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: index === currentIndex ? '#1e3a8a' : '#94a3b8',
                },
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
    </ThemeProvider>
  );
}
