import { Dialog, DialogContent, DialogTitle, Slide } from "@mui/material";
import { Close } from "@mui/icons-material";
import { AppButton } from "../AppButton/AppButton";
import { AppModalProps } from "./AppModalProps";

export function AppModal({
  className = "",
  modalTitle,
  ...props
}: AppModalProps) {
  return (
    <Dialog
      closeAfterTransition={true}
      scroll={"paper"}
      fullWidth={true}
      TransitionComponent={Slide}
      {...props}
    >
      <DialogTitle className={"flex flex-row"}>
        <span className={"grow"}> {modalTitle}</span>

        <AppButton
          iconOnly={true}
          size={"small"}
          title={"close modal"}
          variant={"text"}
          color={"error"}
          onClick={(e) => {
            if (props.onClose) {
              props.onClose(e, "escapeKeyDown");
            }
          }}
        >
          <Close />
        </AppButton>
      </DialogTitle>
      <DialogContent dividers={true} className={"min-h-[50vh]"}>
        <div>{props.children}</div>
      </DialogContent>
      {/*<DialogActions>*/}
      {/*  <AppButton*/}
      {/*    variant={"text"}*/}
      {/*    color={"error"}*/}
      {/*    onClick={(e) => {*/}
      {/*      if (props.onClose) {*/}
      {/*        props.onClose(e, "escapeKeyDown");*/}
      {/*      }*/}
      {/*    }}*/}
      {/*  >*/}
      {/*    Close*/}
      {/*  </AppButton>*/}
      {/*</DialogActions>*/}
    </Dialog>
  );
}
