import React from "react";
import {useTranslation} from "../../lib/hooks";
import {Box, Button, Form, FormField, Grid, Select} from "grommet";
import {enumToList} from "../../lib/utils";
import {PART_OF_SPEECH} from "../../../dto/dist/word";
import {API} from "../../lib/api";
import Title from "../../components/title";

// FormEvent is not a valid type?
function onWordFormSubmit(event: any) {
    console.log(event.value);
}

export default function AddWord() {
    const word = useTranslation('word');
    const nest = useTranslation('nest');
    const pos = useTranslation('pos');
    const affixes = useTranslation('affixes');
    const prefixes = useTranslation('prefixes');
    const send = useTranslation('send');
    const POSes = enumToList(PART_OF_SPEECH);
    return <Grid>
        <Box
            align="center"
            background="light-1"
            pad="medium"
        >
            <Title>{useTranslation('addForm')}</Title>
            <Form onSubmit={onWordFormSubmit}>
                <FormField name="value" label={word}/>
                <Box direction="row" pad="small">
                    <FormField name="nest" label={nest} margin={{right: 'large'}}/>
                    <FormField name="suffixes" label={affixes} margin={{right: 'large'}}/>
                    <FormField name="prefixes" label={prefixes}/>
                </Box>
                <Box direction="row" pad="small">
                    <FormField
                        name="partId"
                        label={pos}
                        component={Select}
                        options={POSes}
                        margin={{right: 'large'}}
                    />
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

AddWord.initialProps = async () => {
    const res = await API.getPrefixes();
    console.log(res);
    return {};
};
