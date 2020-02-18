import React from "react";
import {useTranslation} from "../../lib/hooks";
import {Box, Button, Form, FormField, Grid, Select} from "grommet";
import {enumToList} from "../../lib/utils";
import {PART_OF_SPEECH} from "../../../dto/dist/word";
import {API} from "../../lib/api";

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
            border={{ size: 'medium' }}
            pad="large"
        >
            <Form onSubmit={onWordFormSubmit}>
                <FormField name="value" label={word} />
                <Box
                    direction="row"
                    pad="small"
                >
                    <FormField name="nest" label={nest} />
                    <FormField name="suffixes" label={affixes} />
                    <FormField name="prefixes" label={prefixes} />
                </Box>
                <Box
                    direction="row"
                    pad="small"
                >
                    <FormField
                        name="partId"
                        label={pos}
                        component={Select}
                        options={POSes}
                    />
                    <FormField name="decl" label={"Declension"} component={Select} options={[]} />
                    <FormField name="conj" label={"Conjunction"} component={Select} options={[]} />
                    <FormField name="gender" label={"Gender"} component={Select} options={[]} />
                </Box>
                <Button type="submit" primary label={send} />
            </Form>
        </Box>
    </Grid>;
}

AddWord.initialProps = async () => {
    const res = await API.getPrefixes();
    console.log(res);
  return {};
};
