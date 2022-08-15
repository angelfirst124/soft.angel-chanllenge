import React from 'react';
import moment from 'moment';
import { useQuery } from '@apollo/client';
import { Modal, Card, Spin } from 'antd';
import { LOCATIONQUERY } from 'utils/graphql/queries';
import { IModal } from 'utils/types/common';

const LocationModal : React.FC<IModal> = (props: IModal) => {
  const {
    isModalVisible,
    handleOk,
    handleCancel,
    id,
  } = props;
  const { data: response } = useQuery(LOCATIONQUERY, {
    variables: {
      id,
    },
  });

  return (
    <Modal
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      {response ? (
        <Card
          style={{ width: 240, marginLeft: 110 }}
        >
          <Card.Meta
            title="Name"
            className="ant-card-item"
            description={response.location.name}
          />
          <Card.Meta
            title="Created"
            className="ant-card-item"
            description={
              response.location.created
                ? `${moment(response.location.created).fromNow(true)} ago`
                : 'None'
            }
          />
          <Card.Meta
            title="Dimension"
            className="ant-card-item"
            description={
              response.location.dimension
                ? `${response.location.dimension}`
                : 'None'
            }
          />
          <Card.Meta
            title="Species"
            className="ant-card-item"
            description={
              response.location.species
                ? `${response.location.species}`
                : 'None'
            }
          />
          <Card.Meta
            title="Type"
            className="ant-card-item"
            description={
              response.location.type
                ? `${response.location.type}`
                : 'None'
            }
          />
        </Card>
      ) : (
        <div className="modal-spinner">
          <Spin size="large" />
        </div>
      )}
    </Modal>
  );
};

export default LocationModal;
