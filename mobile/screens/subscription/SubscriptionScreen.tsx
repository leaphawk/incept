import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import { withNavigation, NavigationScreenProps } from 'react-navigation';
import { AddPaymentCardForm } from '../../screens/addPaymentCardForm.component';
import { Layout, Text, Button } from '@kitten/ui';
import { PALETTE } from '../../constants/Colors';
import { PaymentCard } from './PaymentCard';
class SubscriptionScreenView extends Component<NavigationScreenProps> {
  render() {
    return (
      <SafeAreaView>
        <Layout style={{ padding: 15, marginBottom: 15 }}>
          <Text appearance="default" category="h2" style={{ marginBottom: 15 }}>
            Choose Forms
          </Text>
          <AddPaymentCardForm
            onFormValueChange={() => {
              return;
            }}
          />
          <Button
            style={{
              backgroundColor: PALETTE.primary,
              borderColor: PALETTE.primary,
              marginTop: 20
            }}
          >
            CONTINUE TO PAYMENT
          </Button>
        </Layout>
      </SafeAreaView>
    );
  }
}

export const SubscriptionScreen = withNavigation(SubscriptionScreenView);