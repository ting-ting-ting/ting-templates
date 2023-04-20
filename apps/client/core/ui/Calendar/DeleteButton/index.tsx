import { useState } from 'react';
import dayjs from 'dayjs';
import {
  Typography,
  Icon,
  IconButton,
  Modal,
  ModalHeader,
  ModalBody,
  ModalActions,
  Message,
} from '@mezzanine-ui/react';
import { TrashIcon } from '@mezzanine-ui/icons';
import { ClassFragment } from '../constants';
import classes from './index.module.scss';

interface DeleteButtonProps {
  item: ClassFragment;
}

const DeleteButton = ({ item }: DeleteButtonProps) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <IconButton
        type="button"
        className={classes.deleteButton}
        onClick={() => {
          setOpen(true);
        }}
      >
        <Icon icon={TrashIcon} className={classes.icon} color="error" />
      </IconButton>
      <Modal onClose={() => setOpen(false)} open={open} severity="warning" hideCloseIcon>
        <ModalHeader className="gap-4" showSeverityIcon>
          刪除課程
        </ModalHeader>
        <ModalBody>
          <Typography color="text-primary" variant="input2" component="p">
            請確認是否刪除{' '}
            <Typography color="error" variant="input2" component="span">
              {`${dayjs(item.from).format('MM/DD hh:mm')} ~ ${dayjs(item.to).format('hh:mm')} ${item.students.join(
                '、'
              )}`}
            </Typography>{' '}
            {`${item.type}課程`}
          </Typography>
        </ModalBody>
        <ModalActions
          cancelText="取消"
          confirmText="刪除"
          cancelButtonProps={{
            type: 'button',
            size: 'large',
            style: {
              minWidth: 'unset',
            },
          }}
          confirmButtonProps={{
            type: 'button',
            size: 'large',

            style: {
              minWidth: 'unset',
            },
          }}
          onCancel={() => {
            setOpen(false);
          }}
          onConfirm={() => {
            setOpen(false);

            Message.success?.('已刪除課程');
          }}
        />
      </Modal>
    </>
  );
};

export default DeleteButton;
