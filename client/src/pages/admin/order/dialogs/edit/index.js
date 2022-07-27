import { observer } from "mobx-react-lite";
import Dialog from "./dialog";
import { isFunc } from "@utils";
import { useGoodPost, useGoodUpdate } from "@api";

const Default = observer((props) => {
  const { useContext, reload } = props;
  const { dialog = {} } = useContext ? useContext() : {};

  const [callbackPost] = useGoodPost();
  const [callbackUpdate] = useGoodUpdate();

  if (dialog.isShowEdit) {
    const handleOnClose = () => {
      dialog.setIsShowEdit(false);
    };

    const handleOnSave = (data) => {
      if (data?.id) {
        callbackUpdate(data);
      } else {
        callbackPost(data);
      }
      handleOnClose();
      isFunc(reload);
    };

    return (
      <Dialog
        id={dialog?.data?.select}
        onClose={handleOnClose}
        onSave={handleOnSave}
      />
    );
  }
  return null;
});

export default Default;