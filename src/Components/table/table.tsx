import React, { Fragment } from 'react';
import { TableProps } from '../base/table';

export const TableDefault = (props: TableProps) => {
  return (
    <Fragment>
      <table className="w-full text-sm text-left" {...props}>
        {props.children}
      </table>
    </Fragment>
  );
};

export const Table = (props: TableProps) => {
  return (
    <Fragment>
      <table className="w-full text-sm text-left" {...props}>
        {props.children}
      </table>
    </Fragment>
  );
};
