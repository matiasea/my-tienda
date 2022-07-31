
import { Link } from "react-router-dom";

import * as React from 'react';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';

//-----------ESTILOS -----------------
import "./categories.css"

const NavCategories = () => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Stack direction="row" spacing={2}  >
      <div >
        <button 
        ref={anchorRef}
        onClick={handleToggle}
        className="btnCat"
         >
          Categorias
         </button>
        
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
          
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    <Link to="/linea/electrohogar" className="nav2">Electrohogar</Link>
                <Link to="/linea/tvaudiovideo" className="nav2">Tv, Audio y Video</Link>
                <Link to="/linea/pequenios" className="nav2" >Pequeños Electrodomesticos</Link>
                <Link to="/linea/rodados" className="nav2" >Rodados</Link>
                <Link to="/linea/tecnologia" className="nav2" >Tecnologia</Link>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
  );
}




  /*   return (
        <nav>
            <ul className="categories">
                <Link to="/linea/electrohogar">Electrohogar</Link>
                <Link to="/linea/tvaudiovideo" >Tv, Audio y Video</Link>
                <Link to="/linea/pequenios" >Pequeños Electrodomesticos</Link>
                <Link to="/linea/rodados" >Rodados</Link>
                <Link to="/linea/tecnologia" >Tecnologia</Link>
            </ul>
        </nav>
    )
}; */

export default NavCategories;
