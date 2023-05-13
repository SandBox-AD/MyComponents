import React, { Fragment, ComponentPropsWithoutRef } from 'react';

export type TableProps = React.ComponentPropsWithoutRef<'table'>;

const TableBase = (props: TableProps) => {
  return (
    <Fragment>
      <table {...props}> {props.children}</table>
    </Fragment>
  );
};


