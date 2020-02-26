import React, { useEffect, useState } from 'react';
import {useTranslation} from "../../lib/hooks";
import {Box, Button, Form, FormField, Grid, Select, TextInput} from "grommet";
import {enumToList} from "../../lib/utils";
import {PART_OF_SPEECH} from "../../../dto/dist/word";
import {API} from "../../lib/api";
import Title from "../../components/title";

// FormEvent is not a valid type?
function onWordFormSubmit(event: any) {
    // console.log(event.value);
}

function AddWord({ prefixes }) {
    const word = useTranslation('word');
    const nestTr = useTranslation('nest');
    const pos = useTranslation('pos');
    const affixesTr = useTranslation('affixes');
    const prefixesTr = useTranslation('prefixes');
    const send = useTranslation('send');
    const POSes = enumToList(PART_OF_SPEECH);

    const [prefixList, updatePrefixList] = useState(prefixes);

    const [prefix, getPrefix] = useState('');
    useEffect(() => {
        API.getPrefixes(prefix).then((res) => {
            updatePrefixList(res);
        });
    }, [prefix]);

    return <Grid>
        <Box
            align="center"
            background="light-1"
            pad="medium">
            <Title>{useTranslation('addForm')}</Title>
            <Form onSubmit={onWordFormSubmit}>
                <FormField name="value" label={word}/>
                <Box direction="row" pad="small">
                    <FormField name="nest" label={nestTr} margin={{right: 'large'}}/>
                    <FormField name="suffixes" label={affixesTr} margin={{right: 'large'}}/>
                    <FormField
                      name="prefixes"
                      label={prefixesTr}
                      component={() =>
                        <TextInput
                          suggestions={prefixList.map(e => ({ label: e.value, value: e.id }))}
                          value={prefix}
                          onChange={(val) => getPrefix(val.target.value)}
                        />}
                    />
                </Box>
                <Box direction="row" pad="small">
                    <FormField
                        name="partId"
                        label={pos}
                        component={Select}
                        options={POSes}
                        margin={{ right: 'large' }}/>
                    <FormField name="decl" label={"Declension"} component={Select} options={[]}
                               margin={{right: 'large'}}/>
                    <FormField name="conj" label={"Conjunction"} component={Select} options={[]}
                               margin={{right: 'large'}}/>
                    <FormField name="gender" label={"Gender"} component={Select} options={[]}
                               margin={{right: 'large'}}/>
                </Box>
                <Button type="submit" primary label={send}/>
            </Form>
        </Box>
    </Grid>;
}

AddWord.getInitialProps = async () => {
    const res = await API.getPrefixes();
    return { prefixes: res };
};

export default AddWord;
