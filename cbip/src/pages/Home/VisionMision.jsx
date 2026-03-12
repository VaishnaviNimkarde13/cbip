import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import TrackChangesOutlinedIcon from '@mui/icons-material/TrackChangesOutlined';

const VisionMission = () => {
  return (
    <Box sx={{ 
      bgcolor: '#273272', 
      py: { xs: 4, md: 6 }
    }}>
      <Container 
        maxWidth={false} 
        sx={{ 
          maxWidth: '1200px !important',
          margin: '0 auto !important',
          px: { xs: 3, md: 4 }
        }}
      >
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' }, 
          gap: { xs: 4, md: 6 }
        }}>
          {/* Vision Column */}
          <Box sx={{ flex: 1 }}>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 2, 
              mb: 3 
            }}>
              <Box sx={{ 
                width: 52, 
                height: 52, 
                borderRadius: '50%', 
              
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <VisibilityOutlinedIcon sx={{ color: 'white', fontSize: 32 }} />
              </Box>
              <Typography variant="h4" sx={{ 
                fontWeight: 700, 
                color: 'white',
                fontSize: { xs: '22px', md: '26px' }
              }}>
                Vision
              </Typography>
            </Box>

            <Typography sx={{ 
              fontSize: '15px', 
              color: 'white', 
              lineHeight: 1.8,
              textAlign: 'justify',
              mb: 2
            }}>
              * Dissemination of technical knowledge and information through various modes, e.g.,
              publication of journals, manuals, technical reports, guidelines, organizing seminars and
              conferences and recognisation of technical excellence through bestowing awards.
            </Typography>
            <Typography sx={{ 
              fontSize: '15px', 
              color: 'white', 
              lineHeight: 1.8,
              mb: 2
            }}>
              * To provide training to the engineers/professionals.
            </Typography>
            <Typography sx={{ 
              fontSize: '15px', 
              color: 'white', 
              lineHeight: 1.8,
              mb: 2
            }}>
              * To provide consultancy services.
            </Typography>
            <Typography sx={{ 
              fontSize: '15px', 
              color: 'white', 
              lineHeight: 1.8
            }}>
              * To provide research and professional excellence.
            </Typography>
          </Box>


          {/* Mission Column */}
          <Box sx={{ flex: 1 }}>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 2, 
              mb: 3 
            }}>
              <Box sx={{ 
                width: 52, 
                height: 52, 
                borderRadius: '50%', 
             
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <TrackChangesOutlinedIcon sx={{ color: 'white', fontSize: 32 }} />
              </Box>
              <Typography variant="h4" sx={{ 
                fontWeight: 700, 
                color: 'white',
                fontSize: { xs: '22px', md: '26px' }
              }}>
                Mission
              </Typography>
            </Box>

            <Typography sx={{ 
              fontSize: '15px', 
              color: 'white', 
              lineHeight: 1.8,
              textAlign: 'justify',
              mb: 2
            }}>
              * To provide linkages to Indian Engineers, Managers and Scientists with their counterparts
              in other countries and with international organizations.
            </Typography>
            <Typography sx={{ 
              fontSize: '15px', 
              color: 'white', 
              lineHeight: 1.8,
              textAlign: 'justify',
              mb: 2
            }}>
              * To establish a Technical database, technological developments and to provide information
              services to the professionals.
            </Typography>
            <Typography sx={{ 
              fontSize: '15px', 
              color: 'white', 
              lineHeight: 1.8,
              textAlign: 'justify'
            }}>
              * Introduction of Latest Technologies.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default VisionMission;