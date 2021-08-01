import math
import dateutil.parser
import datetime
import time
import os
import boto3
from boto3.dynamodb.conditions import Key, Attr


def elicit_slot(session_attributes, intent_name, slots, slot_to_elicit, message):
    return {
        'sessionAttributes': session_attributes,
        'dialogAction': {
            'type': 'ElicitSlot',
            'intentName': intent_name,
            'slots': slots,
            'slotToElicit': slot_to_elicit,
            'message': message
        }
    }


def confirm_intent(session_attributes, intent_name, slots, message):
    return {
        'sessionAttributes': session_attributes,
        'dialogAction': {
            'type': 'ConfirmIntent',
            'intentName': intent_name,
            'slots': slots,
            'message': {
                'contentType': 'PlainText',
                'content': message
            }
        }
    }


def closeImage(sessionAttributes, fulfillmentState, url, message):
    return {
        "sessionAttributes": sessionAttributes,
        "dialogAction": {
            "type": "Close",
            "fulfillmentState": fulfillmentState,
            "message": message,
            "responseCard": {
                "version": "1",
                "contentType": "application/vnd.amazonaws.card.generic",
                "genericAttachments": [
                      {
                         "imageUrl":url,
                          "buttons": [
                                        {
                                          "text": "Done",
                                          "value": "Done"
                                        }
                                     ]
                      }
                ] 
            }
        }
    }


def delegate(session_attributes, slots):
    return {
        'sessionAttributes': session_attributes,
        'dialogAction': {
            'type': 'Delegate',
            'slots': slots
        }
    }


""" --- Functions that control the bot's behavior --- """

def readTable(table):
    response = table.query(
        KeyConditionExpression=Key('BikeID').eq(1)
    )
    items = response['Items']
    return items


""" --- Intents --- """

def intro(intent_request):
    source = intent_request['invocationSource']
        
    if source == 'FulfillmentCodeHook':
        dynamodb = boto3.resource('dynamodb')
        table = dynamodb.Table('BikesDetails')
        
        item = readTable(table)
        
        # print to cloudwatch
        print(item)

        # action fulfillment code
        return closeImage(intent_request['sessionAttributes'],
                'Fulfilled',
                item[0]['URL'],
                {'contentType': 'PlainText',
                'content': 'Dear customer, thank you, I really appreciate your time and input. I have found an excellent bike for your purposes. I hope you like my offer. If you need help you are welcome to contact me.\n\nOur most capable hardtail when the descents get steep and techy.'})


def extro(intent_request):
    source = intent_request['invocationSource']
        
    if source == 'FulfillmentCodeHook':
        dynamodb = boto3.resource('dynamodb')
        table = dynamodb.Table('BikesDetails')
        
        item = readTable(table)
        
        # print to cloudwatch
        print(item)

        # action fulfillment code
        return closeImage(intent_request['sessionAttributes'],
                'Fulfilled',
                item[0]['URL'],
                {'contentType': 'PlainText',
                'content': 'Congratulations! Here`s the best bike for you. I can`t wait to hear about your riding experience, I`m sure you`ll like it! It`s great meeting you, buddy! If you have any questions, I`m 24/7 here just for you, so see you around. \nOur most capable hardtail when the descents get steep and techy.'})


def dispatch(intent_request):
    """
    Called when the user specifies an intent for this bot.
    """
    intent_name = intent_request['currentIntent']['name']

    if intent_name == 'intro':
        return intro(intent_request)

    if intent_name == 'extro':
        return extro(intent_request)

    raise Exception('Intent with name ' + intent_name + ' not supported')


""" --- Main handler --- """

def lambda_handler(event, context):
    """
    Route the incoming request based on intent.
    The JSON body of the request is provided in the event slot.
    """
    return dispatch(event)
    
