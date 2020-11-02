import * as React from 'react';
import { Space, Input, Select, Tag, Switch ,Radio, Checkbox, Slider, DatePicker, TimePicker } from 'antd';

const options = [{ value: 'gold' }, { value: 'lime' }, { value: 'green' }, { value: 'cyan' }];

function tagRender(props: any) {
    const { label, value, closable, onClose } = props;
  
    return (
      <Tag color={value} closable={closable} onClose={onClose} style={{ marginRight: 3 }}>
        {label}
      </Tag>
    );
}

const Inputs = () => {
    return (
        <Space direction="vertical" style={{width: '100%'}}>
            <Input placeholder="Basic usage" />

            <Select
                showSearch
                style={{ width: '100%' }}
                placeholder="Select a person"
                optionFilterProp="children"
            >
                <Select.Option value="jack">Jack</Select.Option>
                <Select.Option value="lucy">Lucy</Select.Option>
                <Select.Option value="tom">Tom</Select.Option>
            </Select>

            <Select
                mode="multiple"
                showArrow
                tagRender={tagRender}
                defaultValue={['gold', 'cyan']}
                style={{ width: '100%' }}
                options={options}
            />

            <Switch defaultChecked />

            <div>
                <Radio>Radio</Radio>
                <Checkbox>Checkbox</Checkbox>
            </div>

            <Slider defaultValue={30} />
            <Slider range defaultValue={[20, 50]} />

            <div>
                <DatePicker/>
                <TimePicker />
            </div>
            
        </Space>
    )
}

export default Inputs;