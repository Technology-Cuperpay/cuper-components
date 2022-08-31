import { useRef, useState } from "react";
import type { FC } from "react";
import PropTypes from "prop-types";
import {
  Box,
  ButtonBase,
  Toolbar,
  useMediaQuery,
  Typography,
} from "@mui/material";
import type { AppBarProps } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Avatar from "@mui/material/Avatar";
import { grey } from "@mui/material/colors";
import React from "react";
import { createTheme } from "../../theme";
import { ThemeProvider } from "@mui/material/styles";
import { Logo as LogoIcon } from "../../icons/logo";
import { Menu as MenuIcon } from "../../icons/menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import {
  Divider,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Popover,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { UserCircle, UserCircle as UserCircleIcon } from "../../icons/user-circle";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import HelpIcon from "@mui/icons-material/Help";
import GavelIcon from "@mui/icons-material/Gavel";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { TermsModal } from "../molecules";


export interface DashboardNavbarProps extends AppBarProps {
  logout: () => void;
  authorized: boolean;
  register: boolean;
  callBack: () => void;
  handleHelp: () => void;
}

interface AccountPopoverProps {
  anchorEl: null | Element;
  onClose?: () => void;
  open?: boolean;
  handleLogout: () => void;
  logout: () => void;
  handleHelp: () => void;
}

export const AccountPopover: FC<AccountPopoverProps> = (props) => {
  const { anchorEl, onClose, open, handleLogout, logout, handleHelp, ...other } = props;
  

  return (
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={{
        horizontal: "center",
        vertical: "bottom",
      }}
      keepMounted
      onClose={onClose}
      open={!!open}
      PaperProps={{ sx: { width: 300 } }}
      transitionDuration={0}
      {...other}
    >
      <Box sx={{ my: 1 }}>
        <MenuItem component="a">
          <ListItemIcon>
            <HelpIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            primary={
            <Typography color="primary" variant="body1">
              Ayuda
            </Typography>}
            onClick={handleHelp}
          />
        </MenuItem>

        <MenuItem>
          <ListItemIcon>
            <GavelIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            primary={
              <TermsModal color="primary" variant/>
             
            }
          />
        </MenuItem>
        
        <Divider />
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <LogoutIcon color="primary"/>
          </ListItemIcon>
          <ListItemText 
            primary={<Typography color="primary" variant="body1">Cerrar sesión</Typography>}
            onClick={logout}
          />
        </MenuItem>
      </Box>
    </Popover>
  );
};

AccountPopover.propTypes = {
  anchorEl: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool,
};

const AccountButton = (props:any) => {
  const anchorRef = useRef<HTMLButtonElement | null>(null);
  const [openPopover, setOpenPopover] = useState<boolean>(false);
  const theme = useTheme();
  const mobileDevice = useMediaQuery(theme.breakpoints.down("sm"));
  const accent = grey["A100"];
  const { logout, handleHelp } =  props;

  const handleOpenPopover = (): void => {
    setOpenPopover(true);
  };

  const handleClosePopover = (): void => {
    setOpenPopover(false);
  };

  const handleLogout = (): void => {
    setOpenPopover(false);
  };
  

  return (
    <>
      <Box
        component={ButtonBase}
        onClick={handleOpenPopover}
        ref={anchorRef}
        sx={{
          alignItems: "center",
          display: "flex",
          ml: 2,
        }}
      >
        {mobileDevice ? (
          !openPopover ? 
          <MenuRoundedIcon color="primary"/>
          : <CloseOutlinedIcon color="primary"/>
        ) : (
          <Box display="flex" flexDirection="row">
            <Box>
              <Avatar sx={{ bgcolor: accent, width: 31, height: 31, mr: 1.5 }}>
                <UserCircle color="primary"/>
              </Avatar>
            </Box>           
            <Box sx={{ pt: 0.3 }}>
              <KeyboardArrowDownIcon color="primary"/>
            </Box>
          </Box>
        )}
      </Box>
      <AccountPopover
        anchorEl={anchorRef.current}
        onClose={handleClosePopover}
        open={openPopover}
        handleLogout={handleLogout}
        logout={logout}
        handleHelp={handleHelp}
      />
    </>
  );
};

export default function NavBar(props:DashboardNavbarProps) {
  const { logout, authorized, register, callBack, handleHelp} = props;
  const theme = useTheme();
  const mobileDevice = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <ThemeProvider
        theme={createTheme({
          responsiveFontSizes: true,
          mode: "light",
        })}
      >
        <Toolbar
          disableGutters
          sx={{
            minHeight: 64,
            position: 'fixed', 
            top: 0, 
            right: 0, 
            left: 0,
            px: 2,
            zIndex:999,
            bgcolor: register ? "primary.main" : "white",
            justifyContent:
              mobileDevice || authorized ? "space-between" : "left",
            boxShadow:3
             
          }}
        >
          {mobileDevice && authorized ? (
            <Box sx={{ alignItems: "center", display: "flex" }} onClick={callBack}>
              <ChevronLeftIcon fontSize="small" color="primary" />
            </Box>
          ) : null}
          <Box sx={{ alignItems: "center", display: "flex" }}>
            <LogoIcon variant={register ? "primary" : "light"} />
          </Box>
          

          {authorized ? <AccountButton logout={logout} handleHelp={handleHelp}/> : null}
        </Toolbar>
      </ThemeProvider>
    </>
  );
};

NavBar.propTypes = {
  onOpenSidebar: PropTypes.func,
};

