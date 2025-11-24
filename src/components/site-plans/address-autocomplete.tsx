"use client";

import { useState } from "react";
import { APIProvider } from "@vis.gl/react-google-maps";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface AddressAutocompleteProps {
  apiKey: string;
  onAddressSelect: (address: string, lat: number, lng: number) => void;
  className?: string;
}

function AddressAutocompleteInner({
  onAddressSelect,
  className,
}: Omit<AddressAutocompleteProps, "apiKey">) {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      /* Define search options here */
    },
    debounce: 300,
  });
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setShowSuggestions(true);
  };

  const handleSelect = async (description: string) => {
    setValue(description, false);
    clearSuggestions();
    setShowSuggestions(false);

    try {
      const results = await getGeocode({ address: description });
      const { lat, lng } = getLatLng(results[0]);
      onAddressSelect(description, lat, lng);
    } catch (error) {
      console.error("Error getting geocode:", error);
    }
  };

  const handleClear = () => {
    setValue("");
    clearSuggestions();
    setShowSuggestions(false);
  };

  return (
    <div className={cn("relative w-full", className)}>
      <Label htmlFor="address-input">Property Address</Label>
      <div className="relative mt-2">
        <Input
          id="address-input"
          value={value}
          onChange={handleInput}
          onFocus={() => setShowSuggestions(true)}
          disabled={!ready}
          placeholder="Enter a property address..."
          className="pr-10"
        />
        {value && (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 p-0"
            onClick={handleClear}
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      {status === "OK" && showSuggestions && (
        <div className="absolute z-10 mt-1 w-full rounded-md border bg-popover shadow-lg">
          <ul className="max-h-60 overflow-auto py-1">
            {data.map((suggestion) => {
              const {
                place_id,
                structured_formatting: { main_text, secondary_text },
              } = suggestion;

              return (
                <li
                  key={place_id}
                  className="cursor-pointer px-4 py-2 hover:bg-accent text-sm"
                  onClick={() => handleSelect(suggestion.description)}
                >
                  <div className="font-medium">{main_text}</div>
                  <div className="text-xs text-muted-foreground">
                    {secondary_text}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export function AddressAutocomplete({
  apiKey,
  onAddressSelect,
  className,
}: AddressAutocompleteProps) {
  if (!apiKey) {
    return (
      <div className={cn("relative w-full", className)}>
        <Label htmlFor="address-input">Property Address</Label>
        <div className="mt-2">
          <Input
            id="address-input"
            disabled
            placeholder="Google Maps API Key Required"
          />
          <p className="mt-2 text-xs text-muted-foreground">
            Add NEXT_PUBLIC_GOOGLE_MAPS_API_KEY to your .env file
          </p>
        </div>
      </div>
    );
  }

  return (
    <APIProvider apiKey={apiKey} libraries={["places"]}>
      <AddressAutocompleteInner
        onAddressSelect={onAddressSelect}
        className={className}
      />
    </APIProvider>
  );
}
