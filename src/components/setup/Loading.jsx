import { Loader, Box, Text, Col, Paper } from '@mantine/core';
import { appStore, translationStore } from '../../lib/states';

export default function Offline(properties) {
  const t= translationStore((state) => state.t);
  const setMode = appStore((state) => state.setMode);

  return (
    <Col span={12}>
      <Paper padding="sm" shadow="xs">
        <Box mx="auto" sx={{padding: '10px'}}>
          <span>
            <Text size="md">
              {t('setup:loading.message')}
            </Text>
            <Loader variant="dots" />
          </span>
        </Box>
      </Paper>
    </Col>
  );
}
